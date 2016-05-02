<ion-view view-title="Friend">
  <ion-content>
    <ion-list>
      <ion-item class="item-remove-animate item-avatar item-icon-right" ng-repeat="chat in chats" type="item-text-wrap" href="#/tab/chats/{{chat.id}}">
        <img ng-src="{{friend.face}}">
        <h2>{{chat.name}}</h2>
        <p>{{chat.lastText}}</p>
        <i class="icon ion-ios-chatbozes-outline icon- accessory"></i>

        <ion-option-button class="button-assertive" ng-click="remove(friend)">
          Delete
        </ion-option-button>
      </ion-item>
    </ion-list>
  </ion-content>
</ion-view>
