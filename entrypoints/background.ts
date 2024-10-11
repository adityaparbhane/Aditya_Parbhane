export default defineBackground(() => {
  console.log('LinkedIn AI Reply Extension - Background Script Running')

  // Listener for messages from content scripts
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'GENERATE_REPLY') {
      // Dummy response, as actual API calls are out of scope
      sendResponse({
        reply:
          "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.",
      })
    }
  })
})
