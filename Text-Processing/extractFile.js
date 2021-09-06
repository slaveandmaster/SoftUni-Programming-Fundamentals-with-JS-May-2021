function extractFile(path) {
   let index = path.lastIndexOf('.');
   let extension = path.substring(index + 1);
   let startIndex = path.lastIndexOf('\\');
   let fileName = path.substring(startIndex + 1, index);
   
   console.log(`File name: ${fileName}`);
   console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');