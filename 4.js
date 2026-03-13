function getVideoId(url) {
  const m = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

const content = document.getElementById('content');
const lines = document.getElementById('DATA').value.trim().split('\n');

lines.forEach(line => {
  line = line.trim();
  if (!line) return;
  const urlMatch = line.match(/https?:\/\/[^\s]+/);
  if (!urlMatch) return;
  const url = urlMatch[0];
  const videoId = getVideoId(url);
  if (!videoId) return;
  const title = line.replace(url, '').replace(/-\s*$/, '').trim();
  const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const encoded = encodeURIComponent(url);
  
  content.innerHTML += `
        <div class="item" data-type="video" data-url="${url}">
          <div class="main-content">
            <div class="item-header">
              <img src="${thumb}" alt="Thumbnail">
              <div class="item-title">${title}</div>
            </div>
            <div class="actions">
              <button class="btn watch" onclick="window.location.href='dkplayer.html?url=${encoded}'">Watch</button>
              <button class="btn listen">Listen</button>
              <button class="btn share">Share</button>
            </div>
          </div>
          <div class="side-actions">
            <button class="btn download">Download</button>
            <button class="btn bookmark">Bookmark</button>
          </div>
        </div>`;
});