Shared Dependencies:

1. React.js: Used in all components and pages for creating the user interface.

2. Next.js: Used in all pages for server-side rendering and routing.

3. Google Firebase Cloud Firestore: Used in firebase.js for database operations and in pages/api for server-side operations.

4. Discord OAuth: Used in discordOAuth.js for user authentication and in login.js for the login page.

5. Discord API: Used in discordAPI.js for fetching user and server data, and in pages/api for server-side operations.

6. Exported Variables:
   - firebaseConfig in firebase.js
   - discordOAuthConfig in discordOAuth.js
   - discordAPIConfig in discordAPI.js

7. Data Schemas:
   - User schema: Used in login.js and dashboard.js
   - Server schema: Used in servers.js, ServerList.js, and ServerSelect.js
   - Ban schema: Used in bans.js and BanList.js

8. DOM Element IDs:
   - loginButton in login.js
   - serverList in ServerList.js
   - banList in BanList.js
   - serverSelect in ServerSelect.js
   - banCopy in BanCopy.js

9. Message Names:
   - LOGIN_SUCCESS: Used in login.js and _app.js
   - FETCH_SERVERS_SUCCESS: Used in servers.js and dashboard.js
   - FETCH_BANS_SUCCESS: Used in bans.js and dashboard.js

10. Function Names:
    - login in discordOAuth.js and login.js
    - fetchServers in discordAPI.js and servers.js
    - fetchBans in discordAPI.js and bans.js
    - copyBans in banUtils.js and BanCopy.js

11. CSS Styles: Used in all components and pages for styling. Each component and page has its own CSS file.