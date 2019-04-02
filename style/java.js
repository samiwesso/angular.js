angular.module("angularApp", [])
.controller("userController", function ($scope) {
    $scope.namelist = [
        { imagebook: "image/t-shirt/t-shirt.jpg", productname: "Helix Stereo Colorful T-Shirt", price: "$500", rating: 6 },
        { imagebook: "image/t-shirt/t-shirt1.jpeg", productname: "Helix Stereo Colorful T-Shirt", price: "$500", rating: 6 },
        { imagebook: "image/t-shirt/t-shirt2.jpeg", productname: "Helix Stereo Colorful T-Shirt", price: "$500", rating: 6 },
        { imagebook: "image/t-shirt/t-shirt3.jpeg", productname: "Helix Stereo Colorful T-Shirt", price: "$500", rating: 6 },
        { imagebook: "image/t-shirt/t-shirt4.jpeg", productname: "Helix Stereo Colorful T-Shirt", price: "$500", rating: 6 },
        { imagebook: "image/t-shirt/t-shirt5.jpeg", productname: "Helix Stereo Colorful T-Shirt", price: "$500", rating: 6 },
        { imagebook: "image/t-shirt/t-shirt6.jpeg", productname: "Helix Stereo Colorful T-Shirt", price: "$500", rating: 6 },
        { imagebook: "image/t-shirt/t-shirt7.jpeg", productname: "Helix Stereo Colorful T-Shirt", price: "$500", rating: 6 },
        { imagebook: "image/t-shirt/t-shirt8.jpeg", productname: "Helix Stereo Colorful T-Shirt", price: "$500", rating: 6 },
        { imagebook: "image/t-shirt/t-shirt9.jpeg", productname: "Helix Stereo Colorful T-Shirt", price: "$500", rating: 6 },
        { imagebook: "image/t-shirt/t-shirt10.jpeg", productname: "Helix Stereo Colorful T-Shirt", price: "$500", rating: 6 },
        { imagebook: "image/t-shirt/t-shirt11.jpeg", productname: "Helix Stereo Colorful T-Shirt", price: "$500", rating: 6 }
    ];
    for (var i = 0; i < $scope.namelist.length; i++) {
        if ($scope.namelist[i].rating > 0) {
            $scope[$scope.namelist[i].product] = [];
            for (var j = 0; j < $scope.namelist[i].rating; j++) {
                $scope[$scope.namelist[i].product].push({ j: '' });
            }
            $scope.namelist[i].rating = $scope[$scope.namelist[i].product];
        }
    }
    $(window).scroll(function() {
        let topPosition = $(this).scrollTop();

        console.log(topPosition);

        if(topPosition > 100) {
            $(".scrollTop").css("opacity","1");
        } else {
            $(".scrollTop").css("opacity","0");
        }
    })
});
