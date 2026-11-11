/* Handwriting UI for HanziLookupJS. Distributed under GPL-3.0-or-later. */
(function () {
  let ready;
  let strokes = [];
  let activeStroke = null;
  let generation = 0;
  let canvas;
  let context;

  function loadRecognizer() {
    if (!ready) ready = new Promise(function (resolve, reject) {
      HanziLookup.init('lesson', 'handwriting/mmah.json', function (ok) {
        if (ok) resolve();
        else { ready = null; reject(new Error('data-load')); }
      });
    });
    return ready;
  }

  function draw() {
    context.clearRect(0, 0, 300, 300);
    context.strokeStyle = '#cbd5e1';
    context.lineWidth = 1;
    context.setLineDash([5, 5]);
    context.beginPath();
    context.moveTo(150, 0); context.lineTo(150, 300);
    context.moveTo(0, 150); context.lineTo(300, 150);
    context.stroke();
    context.setLineDash([]);
    context.strokeStyle = '#1e3a8a';
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    strokes.forEach(function (stroke) {
      context.beginPath();
      context.moveTo(stroke[0][0], stroke[0][1]);
      stroke.slice(1).forEach(function (p) { context.lineTo(p[0], p[1]); });
      context.stroke();
    });
  }

  async function recognize() {
    const version = ++generation;
    const results = document.getElementById('hw-results');
    results.textContent = strokes.length ? 'Đang nhận diện…' : 'Viết từng chữ vào khung.';
    if (!strokes.length) return;
    try {
      await loadRecognizer();
      if (version !== generation || !canvas.isConnected) return;
      const copy = strokes.map(function (s) { return s.map(function (p) { return p.slice(); }); });
      const analyzed = new HanziLookup.AnalyzedCharacter(copy);
      new HanziLookup.Matcher('lesson').match(analyzed, 8, function (matches) {
        if (version !== generation) return;
        results.replaceChildren();
        matches.forEach(function (match) {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'hw-candidate';
          button.textContent = match.character;
          button.onclick = function () {
            const input = document.getElementById('srs-type-input');
            if (!input || input.disabled) return;
            input.value += match.character;
            strokes = []; draw(); recognize();
          };
          results.appendChild(button);
        });
        if (!matches.length) results.textContent = 'Chưa nhận ra. Thử viết rõ từng nét hoặc viết lại.';
      });
    } catch (error) {
      if (version === generation) results.textContent = 'Chưa tải được dữ liệu viết tay. Kiểm tra thư mục handwriting trên GitHub, hoặc chuyển sang Gõ.';
    }
  }

  window.toggleLessonHandwriting = function (typing) {
    const input = document.getElementById('srs-type-input');
    const panel = document.getElementById('hw-panel');
    if (!input || input.disabled || !panel) return;
    input.readOnly = !typing;
    panel.hidden = typing;
    if (typing) { input.focus(); return; }
    input.blur();
    if (canvas !== document.getElementById('hw-canvas')) {
      canvas = document.getElementById('hw-canvas');
      context = canvas.getContext('2d');
      strokes = []; activeStroke = null; generation++;
      function point(event) {
        const bounds = canvas.getBoundingClientRect();
        return [(event.clientX - bounds.left) * 300 / bounds.width, (event.clientY - bounds.top) * 300 / bounds.height];
      }
      canvas.onpointerdown = function (event) {
        if (input.disabled || activeStroke) return;
        event.preventDefault(); canvas.setPointerCapture(event.pointerId);
        activeStroke = [point(event)]; strokes.push(activeStroke); generation++;
      };
      canvas.onpointermove = function (event) {
        if (!activeStroke) return;
        event.preventDefault(); activeStroke.push(point(event)); draw();
      };
      function finish(event) {
        if (!activeStroke) return;
        activeStroke.push(point(event)); activeStroke = null; draw(); recognize();
      }
      canvas.onpointerup = finish;
      canvas.onpointercancel = finish;
      draw();
    }
    loadRecognizer().catch(function () { recognize(); });
  };
  window.eraseLessonStroke = function (all) {
    if (!canvas || !canvas.isConnected) return;
    if (all) strokes = []; else strokes.pop();
    activeStroke = null; draw(); recognize();
  };
  window.deleteLessonCharacter = function () {
    const input = document.getElementById('srs-type-input');
    if (input && !input.disabled) input.value = Array.from(input.value).slice(0, -1).join('');
  };
})();
