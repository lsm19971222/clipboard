import './index.less'

const createClipboard = function({innerData, width = '', height = '', textColor = ''}) {
  let wrap = document.createElement('div');
  let copyIco = document.createElement('span')

  wrap.innerHTML = innerData;
  wrap.classList.add('wrap');
  wrap.style.cssText = `width: ${width}px; height: ${height}px; color: ${textColor}; `;
  copyIco.innerText = '复制';
  copyIco.classList.add('copy-ico');

  copyIco.addEventListener('click', () => {
    navigator.clipboard.writeText(wrap.textContent.slice(0, -2)).then(res => {
      navigator.clipboard.readText().then(res => {
        console.log(res)
      })
    })
  })

  wrap.appendChild(copyIco);
  return wrap;
}

export default createClipboard;