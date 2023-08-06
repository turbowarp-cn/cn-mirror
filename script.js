function downloadApp(version, architecture) {
    console.log('正在下载应用版本：' + version + '，架构：' + architecture);
    var url = `http://cdn.wearclub.online/TurboWarp-mirror/${architecture}/${version}.exe`
    window.open(url, '_blank');
  }
  