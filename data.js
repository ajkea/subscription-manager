var accounts = ['Werner', 'Isolde', 'Gregory']
var topics = ['Soccer', 'Basketball', 'Skating', 'Tennis', 'Running']
var accountTopicSubscriptions = []
var email

showList = (type, listElementId, category) => {

    type.forEach(element => {
        createListItem(listElementId, element, category)
    });
}

var updateEmail = (inputTextfield) => {
    email = inputTextfield
    let buttons = document.getElementsByTagName('button')
    for (let button of buttons) {
        button.style.pointerEvents = 'visible'
        button.style.backgroundColor = 'white'
    }
}

var addSubscription = (topic) => {
    let stringDifferenceCheck;

    let double = false
    for (let i = 0; i < accountTopicSubscriptions.length; i++) {
        stringDifferenceCheck = accountTopicSubscriptions[0, i].includes('test')
    }

    if (!stringDifferenceCheck) {
        accountTopicSubscriptions.push([email, topic])
        let accountTopicSubscriptionsList = document.getElementById('accountTopicSubscriptionsList')

        let accountTopicSubscriptionsListItem = document.createElement('li')
        accountTopicSubscriptionsListItem.appendChild(document.createTextNode([email, topic]))
        accountTopicSubscriptionsList.appendChild(accountTopicSubscriptionsListItem)
    }
}

var createListItem = (listElementId, data, type) => {
    let list = document.getElementById(listElementId)

    let listItem = document.createElement('li')
    let documentFragment = document.createDocumentFragment();
    documentFragment.appendChild(listItem);

    listItem.appendChild(document.createTextNode(data))
    list.appendChild(listItem)
    if(type!=='account'){
    let listItemButton = document.createElement('button')
    listItemButton.innerText = "subscribe"
    listItemButton.onclick = () => addSubscription(data)
    listItem.appendChild(listItemButton)
    }
}

showList(accounts, 'accountList', 'account')
showList(topics, 'topicList')
showList(accountTopicSubscriptions, 'accountTopicSubscriptionsList')