self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open("diary_app-cache").then(function(cache) {
            return cache.addAll(["index.html"]);
        })
    );
});