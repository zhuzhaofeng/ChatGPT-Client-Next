interface DownloadOptions {
  filename?: string
}

export function useImageDownloader() {
  const downloadImage = (url: string, options?: DownloadOptions) => {
    const a = document.createElement('a') //创建一个<a></a>标签
    a.href = url // 给a标签的href属性值加上地址，注意，这里是绝对路径，不用加 点.
    a.download = options?.filename || 'image.png' //设置下载文件文件名，这里加上.xlsx指定文件类型，pdf文件就指定.fpd即可
    a.style.display = 'none' // 障眼法藏起来a标签
    document.body.appendChild(a) // 将a标签追加到文档对象中
    a.click() // 模拟点击了a标签，会触发a标签的href的读取，浏览器就会自动下载了
    a.remove() // 一次性的，用完就删除a标签
  }

  return { downloadImage }
}
