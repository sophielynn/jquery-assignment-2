$.ajax({
    url: "https://quarkbackend.com/getfile/karbassi/user-profiles",
    type: "GET",
    success: function(response){
        for (var i = 0; i < response.length; i++){
            updateUserInfo(i, response[i]);          
        }
        // console.log(response);
    }
});

function updateUserInfo(index, user){
        var $user = $('.user-profile').eq(index);
        $user.find('.thumbnail').find('img').attr('src', user.picture);
        $user.find('.caption').find('h3').text(user.name.first + " " + user.name.last);
        $user.find('.caption').find('strong').text(user.company.name);
        $user.find('.caption').find('.street').text(user.company.address.street);
        $user.find('.caption').find('.city').text(user.company.address.city);
        $user.find('.caption').find('.state').text(user.company.address.state);
        $user.find('.caption').find('.zip').text(user.company.address.zip);
        $user.find('.caption').find('a').text(user.company.email).attr('href', 'mailto:' + user.company.email);
        $user.css('background-color', user.favoriteColor);
}