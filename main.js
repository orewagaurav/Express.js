require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubApi = {
  "login": "orewagaurav",
  "id": 148637395,
  "node_id": "U_kgDOCNwG0w",
  "avatar_url": "https://avatars.githubusercontent.com/u/148637395?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/orewagaurav",
  "html_url": "https://github.com/orewagaurav",
  "followers_url": "https://api.github.com/users/orewagaurav/followers",
  "following_url": "https://api.github.com/users/orewagaurav/following{/other_user}",
  "gists_url": "https://api.github.com/users/orewagaurav/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/orewagaurav/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/orewagaurav/subscriptions",
  "organizations_url": "https://api.github.com/users/orewagaurav/orgs",
  "repos_url": "https://api.github.com/users/orewagaurav/repos",
  "events_url": "https://api.github.com/users/orewagaurav/events{/privacy}",
  "received_events_url": "https://api.github.com/users/orewagaurav/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Gaurav Kumar",
  "company": null,
  "blog": "https://orewagaurav.vercel.app",
  "location": "Greater Noida",
  "email": null,
  "hireable": null,
  "bio": "\" 𝕋𝕣𝕦𝕤𝕥 𝕞𝕖 𝕀 𝕔𝕒𝕟 𝕗𝕚𝕩 𝕥𝕙𝕒𝕥 🐞 \"",
  "twitter_username": null,
  "public_repos": 22,
  "public_gists": 0,
  "followers": 18,
  "following": 13,
  "created_at": "2023-10-21T14:27:24Z",
  "updated_at": "2025-07-27T09:24:17Z"
}
app.get('/', (req, res) => {
  res.send('Hello World! ')
})
app.get('/gaurav',(req,res)=>{
  res.send("<h1 style= color:red >Hello gaurav</h1>")
})
app.get('/login',(req,res)=>{
  res.send("Login page")
}) 
app.get('/orewagaurav',(req,res)=>{
  res.json(githubApi)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
