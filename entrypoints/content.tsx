// import { defineContentScript } from 'wxt' // Import the WXT function
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './popup/App' // Ensure the import path is correct

// Define and export the content script using WXT
export default defineContentScript({
  matches: ['*://www.linkedin.com/*'],
  main() {
    console.log('Injecting React App into LinkedIn page')

    // Function to inject the React app container
    const injectReactApp = () => {
      const linkedInMessageArea = document.querySelector(
        '.msg-form__contenteditable'
      )

      console.log('Checking for message area:', linkedInMessageArea)

      if (linkedInMessageArea) {
        // Check if the AI icon container is already present
        let reactAppContainer = document.getElementById(
          'ai-reply-extension-root'
        )
        if (!reactAppContainer) {
          // Create a new container element for the React app
          reactAppContainer = document.createElement('div')
          reactAppContainer.id = 'ai-reply-extension-root'
          reactAppContainer.className = 'relative hidden' // Tailwind CSS classes for positioning and hiding

          // Append the React app container to the LinkedIn message area
          linkedInMessageArea.parentElement?.appendChild(reactAppContainer)

          // Use React 18's `createRoot` instead of `ReactDOM.render`
          const root = ReactDOM.createRoot(reactAppContainer)
          root.render(<App />)

          // Add focus event listener to the message area
          linkedInMessageArea.addEventListener('focus', () => {
            reactAppContainer.classList.remove('hidden')
          })

          // Add click event listener to the document to detect clicks outside the message area and AI icon
          document.addEventListener('click', (event) => {
            const target = event.target as Node
            if (
              !linkedInMessageArea.contains(target) &&
              !reactAppContainer.contains(target)
            ) {
              reactAppContainer.classList.add('hidden')
            }
          })
        }
      }
    }

    // Observe DOM mutations to find the message area once it's loaded
    const observer = new MutationObserver(() => {
      injectReactApp()
    })

    // Start observing the body for child node changes
    observer.observe(document.body, { childList: true, subtree: true })

    // Initial injection
    injectReactApp()
  },
})
