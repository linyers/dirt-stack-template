# D.I.R.T. template

A template for Django that uses Inertiajs, React with TypeScript, and TailwindCSS.

## How to use

### Setup

1. Setup some virtual enviroment (virtualenv, poetry, etc) and activate them

   ```sh
   virtualenv venv # or python -m venv venv

   # linux and mac
   source venv/bin/activate

   #windows users
   ./venv/Scripts/activate
   ```

2. Install the python dependencies

   ```sh
   pip install django inertia-django django-vite whitenoise
   ```

3. Run

   ```sh
   django-admin startproject --template https://github.com/linyers/dirt-stack-template/archive/master.zip my_django_project .
   ```

4. Install node dependencies

   ```sh
   pnpm i
   ```

### Development

1. Run the Django's migrations

   ```sh
   ./manage.py migrate
   ```

2. Run D.I.R.T. Vite's dev server

   ```sh
   pnpm run dev
   ```

3. Run the Django dev server (in other terminal)

   ```sh
   ./manage.py runserver
   ```

### Production

1.  Set `DEBUG=False` in Django's project settings

    ```python
    # In settings.py
    ...
    DEBUG=False
    ...
    ```

2.  Build Js/assets for production

    ```sh
    pnpm run build
    ```

3.  Run the Django's migrations

    ```sh
    ./manage.py migrate
    ```

4.  Run `collectstatic`

    ```sh
    rm -rf staticfiles/
    ./manage.py collectstatic
    ```

5.  Run the Django production server

    a. Run the simple WSGI Django's server

    ```sh
    ./manage.py runserver
    ```

    b. Or install a WSGI server of your preference and run it, for example, Gunicorn

    ```sh
    pip install gunicorn

    # run the server
    gunicorn --env DJANGO_SETTINGS_MODULE={{ project_name }}.settings {{ project_name }}.wsgi:application --bind 0.0.0.0:8000
    ```

# Acknowledgments

- [Saiforceone](https://github.com/saiforceone)'s [tutorial](https://dev.to/saiforceone/build-web-fullstack-apps-with-dirt-django-inertia-react-tailwind-css-aka-dirt-stack-5bl3)
