// Beautiful and Customizable Hyperlink Tooltip
// developed by Tawhidur Rahman Dear, https://www.tawhidurrahmandear.com
// Live Preview available at https://www.devilhunter.net/2026/01/customizable-hyperlink-tooltip.html


(() => {
  const tooltip = document.getElementById('tooltip');

  const OFFSET_X = 12;
  const OFFSET_Y = 8;

  function showTooltip(e) {
    const text = e.target.dataset.tip;
    if (!text) return;

    tooltip.textContent = text;
    tooltip.style.left = `${e.pageX + OFFSET_X}px`;
    tooltip.style.top = `${e.pageY + OFFSET_Y}px`;
    tooltip.style.visibility = 'visible';
  }

  function hideTooltip() {
    tooltip.style.visibility = 'hidden';
  }

  document.addEventListener('mouseover', (e) => {
    if (e.target.matches('[data-tip]')) {
      showTooltip(e);
    }
  });

  document.addEventListener('mousemove', (e) => {
    if (tooltip.style.visibility === 'visible') {
      tooltip.style.left = `${e.pageX + OFFSET_X}px`;
      tooltip.style.top = `${e.pageY + OFFSET_Y}px`;
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.matches('[data-tip]')) {
      hideTooltip();
    }
  });
})();