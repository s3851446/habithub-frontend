# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Notes about finished website vs proposed concept

# Minimum viable features proposed in A1
- Login/signup
- Create habits
- Mark habits as completed
- Profile page
- Logout

# Extended viable features proposed in A1

- View habit statistics
- Reminders/Notifications
- Settings
- Share with others
- Leaderboard

# Additional ideation outlined in A1 wireframes

Login
- Image or gif from the website or a small animation of the website with a skeletal look, or a quote that describes the website/app.

Sign up 
- The login button will enlarge upon hover to indicate that affords being clicked

Guide page 
- Sticky header. Upon hover, the icons will show a tooltip to let the user know what they represent.
- Images or GIFs will let the user know how to use the app.

Dashboard 
- The arrow next to each habit will move slightly to the right upon hover from the user to show that the card can be dragged towards the right to complete. The user can also drag it to the left or edit or delete the habit.
- The user can click the Add Habit button to add a new habit. The button will enlarge upon hover to indicate that it affords being clicked.

Settings 
- In the profile settings section, the user will be able to change all of their personal settings. By clicking on password, a new page or pop-up will open to allow the user to enter their current password and replace it with a new one.
- Each habit can have individual notification settings applied to it, depending on the frequency, forgettability, or urgency of each habit.

Statistics 
- Progress bars indicate how far into each streak the user is. The end goal is defined by the user, depending on how many times in a row they want to achieve their habit.

Habits 
- Clicking the ‘edit’ and ‘delete buttons opens a pop-up window. 
- The pop-up window is animated, dropping from the top of the screen and fixating in the middle, allowing the user to edit the contents of the card, or confirm whether they want to delete the card or not.
- Extra space on the right will be utilised to add some sort of animation to make the web app seem interactive and alive.
