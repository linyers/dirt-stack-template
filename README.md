# D.I.R.T. template

A template for Django that uses Inertiajs, React with TypeScript, and TailwindCSS.

## How to use

- Setup some virtual enviroment and install required python dependencies.

```
virtualenv venv # or python -m venv venv

# linux and mac
source .venv/bin/activate

#windows users
./venv/Scripts/activate

pip install -r requirements.txt
```

- Run

```
django-admin startproject --template https://github.com/linyers/dirt-stack-template/archive/master.zip my_django_project .
```

- Run `pnpm i`

- Run `python manage.py runserver` and `pnpm run dev` (in different terminals) and got to http://127.0.0.1:8000

# Acknowledgments

- [Saiforceone](https://github.com/saiforceone)'s [tutorial](https://dev.to/saiforceone/build-web-fullstack-apps-with-dirt-django-inertia-react-tailwind-css-aka-dirt-stack-5bl3)
