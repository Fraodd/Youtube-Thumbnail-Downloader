document.getElementById('fetchThumbnail').addEventListener('click', function() {
    const videoUrl = document.getElementById('videoUrl').value;
    const thumbnailElement = document.getElementById('thumbnail');
    const downloadButton = document.getElementById('downloadButton');

    // Extract video ID from the URL
    const videoId = videoUrl.split('v=')[1]?.split('&')[0];
    if (!videoId) {
        alert('Please enter a valid YouTube URL.');
        return;
    }

    // Construct thumbnail URL
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    // Set the thumbnail source
    thumbnailElement.src = thumbnailUrl;
    thumbnailElement.classList.add('visible'); // Add visible class to fade in

    // Set up download link
    downloadButton.href = thumbnailUrl;
    downloadButton.download = `thumbnail_${videoId}.jpg`; // Set the download filename
    downloadButton.style.display = 'block'; // Show download button
});
