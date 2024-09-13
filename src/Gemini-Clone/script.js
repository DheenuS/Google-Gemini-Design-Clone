const hamburgerIcon = document.getElementById('hamburger');
const sidebar = document.getElementById('side-bar');
const textContents = document.querySelectorAll('.sidebar-text');
const mainTitles = document.querySelectorAll('.main-title');


const sidebar_width_small = '4.5rem';
const sidebar_width_large = '19.96rem';

const chatButton = document.getElementById('new-chat-button');
const chatButton_width_small = '40px';
const chatButton_width_large = '130px';

const help = document.getElementById('help');
const help_width_small = '40px';
const help_width_large = '300px';

const activity = document.getElementById('activity');
const activity_width_small = '40px';
const activity_width_large = '300px';

const settings = document.getElementById('settings');
const settings_width_small = '40px';
const settings_width_large = '300px';

const navTitle = document.getElementById('nav-title');
const navTitle_margin_small = "80px";
const navTitle_margin_large = "20.5rem";

const mainContents = document.getElementById('main-content');
const maincontent_margin_small = "6.8rem";
const maincontent_margin_large = "14.2rem";

const promptBox = document.getElementById('prompt');
const promptBox_margin_small = "4rem";
const promptBox_margin_large = "300px";

// Ensure initial state
sidebar.style.width = sidebar_width_small;
chatButton.style.width = chatButton_width_small;
help.style.width = help_width_small;
activity.style.width = activity_width_small;
settings.style.width = settings_width_small;

mainContents.style.marginLeft = maincontent_margin_small;
navTitle.style.marginLeft = navTitle_margin_small;
promptBox.style.marginLeft = promptBox_margin_small;

hamburgerIcon.addEventListener('click', () => {
  // title, content, prompt margin
  navTitle.style.transition = ".3s ease-in-out";
  mainContents.style.transition = ".3s ease-in-out";
  promptBox.style.transition = ".3s ease-in-out";

  navTitle.style.marginLeft = navTitle.style.marginLeft === navTitle_margin_small ? navTitle_margin_large : navTitle_margin_small;
  mainContents.style.marginLeft = mainContents.style.marginLeft === maincontent_margin_small ? maincontent_margin_large : maincontent_margin_small;
  promptBox.style.marginLeft = promptBox.style.marginLeft === promptBox_margin_small ? promptBox_margin_large : promptBox_margin_small;
 
  // sidebar width
  sidebar.style.width = sidebar.style.width === sidebar_width_small ? sidebar_width_large : sidebar_width_small;

  // sidebar chatbutton width
  chatButton.style.width = chatButton.style.width === chatButton_width_small ? chatButton_width_large
    : chatButton_width_small;

  // sidebar bottom content width
  help.style.width = help.style.width === help_width_small ? help_width_large
    : help_width_small;

  activity.style.width = activity.style.width === activity_width_small ? activity_width_large
    : activity_width_small;

  settings.style.width = settings.style.width === settings_width_small ? settings_width_large
    : settings_width_small;

  // Toggle visibility of text content
  textContents.forEach(element => element.classList.toggle('hidden'));

});

document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('#sidebar-lists ul li');
  const contents = document.querySelectorAll('.content');

  listItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all list items
      listItems.forEach(li => li.classList.remove('active'));
      // Hide all content sections
      contents.forEach(content => content.classList.remove('active'));

      // Add active class to the clicked list item
      item.classList.add('active');
      // Show the corresponding content
      const contentId = item.getAttribute('data-content-id');
      document.getElementById(contentId).classList.add('active');
    });
  });
});

document.querySelectorAll('li').forEach((item) => {
  item.addEventListener('click', () => {
    // Hide the previous content
    document.getElementById('content-parent').style.display = 'none';

    // Display the new content in the content div
    document.getElementById('content').innerText = `You clicked: ${this.innerText}`;
  });
});

// const inputBox = document.getElementById('input-box');
// const sendButton = document.getElementById('send-button');
// inputBox.ariaValueMax.trim() === "" ? sendButton.style.display = "none" : sendButton.style.display = "block";

const inputBox = document.getElementById('input-box');
const micIcon = document.getElementById('mic-icon');
const photoIcon = document.getElementById('photo-icon');
const sendIcon = document.getElementById('send-icon');

inputBox.addEventListener('input', () => {
    const inputValue = inputBox.value.trim();

    if (inputValue === "") {
        micIcon.style.transform = "translateX(0)";
        photoIcon.style.transform = "translateX(0)";
        sendIcon.style.opacity = "0";
        sendIcon.style.visibility = "hidden";
    } else {
        micIcon.style.transform = "translateX(-40px)";
        photoIcon.style.transform = "translateX(-40px)";
        sendIcon.style.opacity = "1";
        sendIcon.style.visibility = "visible";
    }
});


const designModifyIcon = document.getElementById('design-modify-icon');
const designPopup = document.getElementById('design-popup');
const designModifyTooltip = document.getElementById('design-modify-tooltip');

// Show the popup when the icon is clicked
designModifyIcon.addEventListener('click', (event) => {
  designPopup.style.display = 'block';
  designModifyTooltip.style.display = 'none';
  designModifyIcon.style.backgroundColor = '#004a77';
  event.stopPropagation(); // Prevent click from propagating to the window
});

// Hide the popup when clicking outside the icon
window.addEventListener('click', (event) => {
  if (!designModifyIcon.contains(event.target)) {
    designPopup.style.display = 'none';
    designModifyTooltip.style.display = 'block';
  }
});

designModifyIcon.addEventListener('mouseover', () => {
  designModifyIcon.style.backgroundColor = '#383a3c';
});
designModifyIcon.addEventListener('mouseout', () => {
  designModifyIcon.style.backgroundColor = 'none';    
});

const designShareIcon = document.getElementById('design-share-icon');
const sharePopup = document.getElementById('share-popup');
const shareModifyTooltip = document.getElementById('design-share-tooltip');

// Show the popup when the icon is clicked
designShareIcon.addEventListener('click', (event) => {
  sharePopup.style.display = 'block';
  shareModifyTooltip.style.display = 'none';
  designShareIcon.style.backgroundColor = '#004a77';
  event.stopPropagation(); // Prevent click from propagating to the window
});

// Hide the popup when clicking outside the icon
window.addEventListener('click', (event) => {
  if (!designShareIcon.contains(event.target)) {
    sharePopup.style.display = 'none';
    shareModifyTooltip.style.display = 'block';
    designShareIcon.style.backgroundColor = 'inherit';
  }
});

const designmoreIcon = document.getElementById('design-more-icon');
const morePopup = document.getElementById('more-popup');
const moreModifyTooltip = document.getElementById('design-more-tooltip');

// Show the popup when the icon is clicked
designmoreIcon.addEventListener('click', (event) => {
  morePopup.style.display = 'block';
  moreModifyTooltip.style.display = 'none';
  designmoreIcon.style.backgroundColor = '#004a77';
  event.stopPropagation(); // Prevent click from propagating to the window
});

// Hide the popup when clicking outside the icon
window.addEventListener('click', (event) => {
  if (!designmoreIcon.contains(event.target)) {
    morePopup.style.display = 'none';
    moreModifyTooltip.style.display = 'block';
    designmoreIcon.style.backgroundColor = 'inherit';
  }
});


