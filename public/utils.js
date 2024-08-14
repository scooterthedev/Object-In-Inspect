function loadData(delay = 0, size = 0, contentType = "text/plain") {
  return fetch(`/data?delay=${delay}&size=${size}&contentType=${contentType}`);
}

let contentTypes = [
  'text/plain', 'text/html', 'image/jpeg', 'image/png', 'application/json',
  'application/xml', 'application/pdf', 'application/zip', 'application/gzip',
  'application/x-bzip2', 'application/x-tar', 'application/x-rar-compressed',
  'application/x-7z-compressed', 'application/x-xz', 'application/x-lzip',
  'application/x-lzma', 'application/x-lz4', 'application/x-snappy-framed',
  'application/x-zstd', 'application/x-webm', 'application/x-matroska',
  'application/x-mpegurl', 'application/x-msdownload', 'application/x-msmetafile',
  'application/x-ms-shortcut', 'application/x-ms-installer', 'application/x-ms-wmd',
  'application/x-ms-wmz', 'application/x-ms-xbap', 'application/x-ms-application'
];
function randomContentType() {
  return contentTypes[Math.floor(Math.random() * contentTypes.length)];
}
