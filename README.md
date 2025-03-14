# Self Chat-bot Infas

A self-engaging chatbot application where two AI bots, **Mark** and **Max**, converse with each other based on an initial user prompt. The conversation is displayed in real-time with smooth auto-scrolling and optimized performance.

## How to Run the Project

# Step 1: Clone the repository
git clone https://github.com/infas03/ai-chatbot-infas.git
cd self-chatbot-infas

# Step 2: Install dependencies
npm install

# Step 3: Set up environment variables
echo "GOOGLE_GEN_AI_API_KEY=your-api-key-here" > .env

# Step 4: Run the development server
npm run dev


## Features

1. **Two AI Bots**:
   - **Mark** and **Max** engage in a conversation based on the user's initial prompt.
   - The bots take turns responding to each other for a total of 10 messages (5 exchanges).

2. **Real-Time Updates**:
   - The chat updates in real-time as the bots respond, providing a seamless user experience.

3. **Smooth Auto-Scrolling**:
   - The chat automatically scrolls down smoothly when new messages are added, ensuring the latest messages are always visible.

4. **Optimized Performance**:
   - The app is structured and optimized for performance using React best practices, including:
     - Code splitting.
     - Memoization with `React.memo`, `useCallback`, and `useMemo`.
     - Proper error handling for API calls.

5. **Loading State**:
   - A spinner is displayed in the "START" button while the conversation is being generated.
   - A message is shown to inform the user to wait until the conversation is complete.

## Technologies Used

- **Frontend**:
  - **Next.js**: React framework for server-rendered applications.
  - **Tailwind CSS**: Utility-first CSS framework for styling.
  - **React Markdown**: Library for rendering Markdown in React.

- **Backend**:
  - **Google Generative AI API**: Used to generate responses for the bots (`gemini-2.0-flash` model).

- **Other Tools**:
  - **TypeScript**: For type-safe development.
  - **React Hooks**: `useState`, `useEffect`, `useCallback`, and `useMemo` for state and performance management.
  - **ESLint**: For code linting and maintaining code quality.


