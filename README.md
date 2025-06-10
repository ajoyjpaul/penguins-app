# Penguins AI - Hockey Team Analytics

A fun interactive web application that provides AI-powered insights about the Pittsburgh Penguins hockey team using real 2024-25 season roster data.

### Video Demo (YouTube)
https://www.youtube.com/watch?v=Y0qUKT8oRPY

## ⚠️ Disclaimer

**This project is not affiliated with the Pittsburgh Penguins organization in any way.** This is an independent, educational project created for entertainment and learning purposes only.

**"Pittsburgh Penguins" is a trademark of Pittsburgh Penguins LP.** All trademarks, logos, and team names are the property of their respective owners.

## 🎯 About This Project

This is a **fun project** that combines:

- Modern web development technologies
- AI/LLM integration via OpenRouter
- Real NHL roster data
- Interactive user experience

The app allows users to ask natural language questions about the Pittsburgh Penguins' 2024-25 roster and get detailed, data-driven responses using Meta's LLaMA 3.3-8B model.


### Tech Stack

- **Frontend**: Vue.js 3 + TypeScript + Bootstrap CSS
- **Backend**: Node.js + Express + TypeScript
- **AI**: OpenRouter API (Meta LLaMA 3.3-8B)
- **Authentication**: Firebase Auth
- **Data**: Static JSON roster data from NHL API

### Key Features

1. **Roster Display**: Interactive tables showing players, stats, and positions
2. **AI Chat Interface**: Natural language queries about team data
3. **Authentication**: Secure login system with Firebase
4. **Responsive Design**: Mobile-friendly UI with Pittsburgh Penguins theming
5. **Real-time Data**: Uses actual 2024-25 season statistics

### Data Flow

1. **User Authentication**: Firebase handles user login/logout
2. **Roster Data**: Static JSON file with complete player statistics.
3. **AI Queries**:
   - User submits question via frontend
   - Backend receives request and adds complete roster context
   - OpenRouter API processes query with full team data
   - AI response formatted with markdown
   - Frontend renders formatted response

### AI Integration

- Uses OpenRouter's API to access Meta LLaMA 3.3-8B model
- Complete 2024-25 roster data injected into every AI request
- AI prompted to format responses with markdown
- Supports hockey-specific queries about lineups, stats, comparisons


## 📊 Features

- **Interactive Roster Tables**: View forwards, defensemen, and goalies with detailed stats
- **AI-Powered Insights**: Ask questions like:
  - "Who are the top scorers on the team?"
  - "Compare Crosby and Malkin's performance this season"
  - "What's the best line combination?"
  - "How are the goalies performing?"
- **Markdown Formatting**: AI responses include proper formatting with headers, lists, and emphasis
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Future Additions

- Real-time data updates from NHL API to BigQuery
- Run BigQuery SQL queries to get more data to feed into the AI model and finetune the model

## 🤝 Contributing

This is a fun educational project! Feel free to:

- Submit bug reports or feature requests
- Fork the project and experiment
- Share your own hockey analytics ideas

## 📝 License

This project is open source and available under the MIT License.

**Note**: This project uses publicly available NHL statistics and is not affiliated with the NHL or Pittsburgh Penguins organization.
