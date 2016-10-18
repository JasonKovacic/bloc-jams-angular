
(function() {
    function AlbumCtrl() {
        console.log("flag 1")
        var albumData = albumPicasso;


        this.albumData = albumPicasso;


        this.foo = "bar"

        console.log(albumData)
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();
