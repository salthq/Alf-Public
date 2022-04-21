# Craft Base Site

## Local setup

-   Clone this repo

```bash
git clone https://github.com/salthq/Alf-Public.git desired-dir-name
```

-   Move into the newly created project folder

```bash
cd desired-dir-name
```

-   Create the valet link (optional)

```bash
valet link
```

-   Create your `.env` from the `.env.example`

```bash
cp .env.example .env
```

-   Install the composer dependencies

```bash
composer install
```

> 👀 You might see some error output about cache clearing. Not to worry! Craft isn’t installed yet, so that’s perfectly fine.

-   Create a new MySQL database in Tableplus

-   Run the Craft Setup to update the `.env` with a generated security key and database credentials, and test the connection.

```bash
php craft setup
```

-   Install Craft

```bash
php craft install
```

> You’ll be asked for things like a username, email, password, and more. These values will be written to the `.env` file and the installer will run.
>
> Be sure to enter the site URL as set up with your local server. If you miss it, you can edit it later by hand in the `.env` file which should have a variable named `DEFAULT_SITE_URL`. This is important because the AssetRev plugin configuration relies on it.
>
> After the installer runs you should be able to log into the Control Panel at `http://local-site-name.test/admin`.

-   Install NPM dependencies

```bash
npm install
```

### Tailwind Development Flow

The original CSS and JavaScript files are in the `./src` folder.

There are two npm scripts you can run for now:

#### Development Build

```bash
npm run dev
```

This builds the CSS file with classes currently used in the project and also runs a watcher which rebuilds the CSS file on the fly when additional classes are added during development.

#### Production Build

```bash
npm run prod
```

This builds the CSS file with classes currently used in the project.
