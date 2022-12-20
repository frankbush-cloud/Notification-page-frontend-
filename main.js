const markRead = document.querySelector('.mark-all');
const notificationNumber = document.getElementById('number-of notification')
const unreadNotifications = document.querySelectorAll('.unread');
const example = document.querySelector('.example');

//find the number of unread nitifications
// let length = unreadNotifications.length
// console.log(length);

// const numberOfUnreadNotifications =  unreadNotifications.length
notificationNumber.innerHTML = unreadNotifications.length
console.log(unreadNotifications.length)

unreadNotifications.forEach(message =>{
    message.addEventListener('click', ()=>{
        message.classList.remove('unread');
        const newNotificationNumber =  document.querySelectorAll('.unread');
        notificationNumber.innerText = newNotificationNumber.length

    })
})
    
markRead.addEventListener('click', ()=>{
    unreadNotifications.forEach(notification =>{
        notification.classList.remove('unread')
    })
    const newNotificationNumber =  document.querySelectorAll('.unread');
        notificationNumber.innerText = newNotificationNumber.length
        const message = document.querySelector('.message');
        message.innerText = "";
        message.style.cssText = "background: transparent; padding: 0; border: none"
})

// example.classList.add('unread');
// console.log(example)

















// function setDisplay(className, colorValue) {
//     var items = document.getElementsByClassName(className);
//     for (var i=0; i < items.length; i++) {
//       items[i].style.color = colorValue;
//     }
//   }


//   console.log(Notification.permission);

//   if (Notification.permission === "granted"){
//     alert("we have permission");
//   }else if (Notification.permission !=="denied"){
//     Notification.requestPermission().then(permission =>{
//         console.log(permission);
//     })
//   }