# Contributing

Thank you already to contributing to project! We trying make contributing as easier as possible. 

## Use Git Flow

Merge requests are the best way to propose changes to the codebase. We actively welcome your merge requests:

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests.
3. Ensure the tests pass. 
4. Make sure your code lints. 
6. Merge request

## Adding new data and update exist

All the data is managed throught a series of [Json](https://www.json.org/json-en.html) files. 

To add new [data files](https://gitlab.com/mobilespectrum/MobileSpectrum/-/tree/main/src/data/countries) to get familiar how to set up. The file name should named as country name example `finland.json`. If there is space between name like United Kingdon, use underscore `united_kingdom.json`.

Full JSON schema is documented in [Wiki](https://gitlab.com/mobilespectrum/MobileSpectrum/-/wikis/JSON-data-format)

### Test schema locally

To test locally the schema, you need install some NodeJS packages

```
yarn global add ajv-cli ajv-formats
```

Move to `src/data` directory and run command to test JSON files against schema. 

```
cd src/data
ajv test -s schemas/country.schema -d "countries/*.json" -c ajv-formats --valid --verbose --all-errors
```

This should return something like `countries/finland.json` passed test.

## Report Bugs

Report bugs in [issues](https://gitlab.com/mobilespectrum/MobileSpectrum/-/issues). Just create new issue and report details and steps to repeat the issue.
