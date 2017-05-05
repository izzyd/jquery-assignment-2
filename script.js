$.ajax({
    url: "https://quarkbackend.com/getfile/karbassi/user-profiles",
    type: "GET",
    success: function (response) {
        // console.log(response); 

        var firstUser = response[0];

        console.log(firstUser);

        for(var i = 0; i<response.length; i++) {
            var user = response[i];
            udateUserInformation(i, user);
        }

    }
})

// 1. Create a new function that updates one user at a time. Call this new function inside the loop in step 4.

function udateUserInformation(index, user) {
    var $user = $('.user-profile').eq(index);

        $user.find('.user-name').text( user.name );

        $user.find('.user-phone').text( user.phone );

        $user.find('.user-company').text( user.company.name );

        $user.find('.user-website').find('a').text( user.website );

        $user.find('.user-website').find('a').attr('href', "http://" + user.website );
}