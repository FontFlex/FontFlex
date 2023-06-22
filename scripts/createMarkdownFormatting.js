 // Get references to the textarea and preview elements
 var textarea = document.getElementById('markdown-editor');
 var preview = document.getElementById('preview');

 // Update the preview when the textarea content changes
 textarea.addEventListener('input', function() {
   var markdownText = textarea.value;
   var htmlText = convertMarkdownToHTML(markdownText);
   preview.innerHTML = htmlText;
 });

 // Function to convert Markdown to HTML
 function convertMarkdownToHTML(markdownText) {
   var htmlText = '';

   // Handle headers (h1, h2, h3, etc.)
   markdownText = markdownText.replace(/^(#{1,6})\s*(.*?)\s*$/gm, function(match, p1, p2) {
     var level = p1.length;
     return '<h' + level + '>' + p2 + '</h' + level + '>';
   });

   // Handle paragraphs
   var paragraphs = markdownText.split('\n\n');
   paragraphs.forEach(function(paragraph) {
     htmlText += '<p>' + paragraph + '</p>';
   });

   // Handle emphasis (bold and italic)
   htmlText = htmlText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
   htmlText = htmlText.replace(/\*(.*?)\*/g, '<em>$1</em>');

   return htmlText;
 }

 
