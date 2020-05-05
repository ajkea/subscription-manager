var accounts = ['Werner', 'Isolde', 'Gregory']
var topics = ['Soccer', 'Basketball', 'Skating', 'Tennis', 'Running']
var accountTopicSubscriptions = []
var email

showList = (type, listElementId) => {

    type.forEach(element => {
        createListItem(listElementId, element)
    });
}

var updateEmail = (inputTextfield) => {
    email = inputTextfield
    let buttons = document.getElementsByTagName('button')
    for(let button of buttons){
        button.style.pointerEvents = 'visible'
    }
}

var addSubscription = (topic) => {

    accountTopicSubscriptions.push([email, topic])
    let accountTopicSubscriptionsList = document.getElementById('accountTopicSubscriptionsList')

    let accountTopicSubscriptionsListItem = document.createElement('li')
    accountTopicSubscriptionsListItem.appendChild(document.createTextNode([email, topic]))
    accountTopicSubscriptionsList.appendChild(accountTopicSubscriptionsListItem)
}

var createListItem = (listElementId, data) => {
    let list = document.getElementById(listElementId)

    let listItem = document.createElement('li')
    let documentFragment = document.createDocumentFragment();
    documentFragment.appendChild(listItem);

    let listItemButton = document.createElement('button')
    listItemButton.innerText = "subscribe"
    listItemButton.onclick = () => addSubscription(data)
    listItem.appendChild(document.createTextNode(data))
    listItem.appendChild(listItemButton)
    list.appendChild(listItem)
}

showList(accounts, 'accountList')
showList(topics, 'topicList')
showList(accountTopicSubscriptions, 'accountTopicSubscriptionsList')