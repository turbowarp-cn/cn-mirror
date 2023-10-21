function downloadApp(version, architecture) {
    console.log('正在下载应用版本：' + version + '，架构：' + architecture);
    var url = `http://cdn.wearclub.online/TurboWarp-mirror/${architecture}/TurboWarp-Setup-${version}-${architecture}.exe`
    var link = document.createElement('a'); link.href = url; link.download = `TurboWarp-Setup-${version}-${architecture}.exe`
    link.click();
  }
  function downloadApp_Desk(version, architecture) {
    console.log('正在下载应用版本：' + version + '，架构：' + architecture);
    var url = `http://cdn.wearclub.online/TurboWarp-mirror/${architecture}/${version}.exe`
    var link = document.createElement('a'); link.href = url; link.download = `${version}.exe`
    link.click();
  }