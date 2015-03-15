angular.module('myapp.controllers', [])

.controller('HomeCtrl', function($scope) {
  $scope.users=[
    {name: 'Srimal', age: '24'},
    {name: 'Priyanga', age: '23'},
    {name: 'Mark', age: '25'}
  ]

  //Insert New Users
  $scope.newUser = [];
  $scope.setUsers = function () {
    $scope.users.push(
      { 
        name: $scope.newUser.name,
        age: $scope.newUser.age,
      }
    );
  }
  
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
