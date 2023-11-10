function describe_city(_city: string, _country = 'Pakistan'){
        console.log("${city} is in ${country}");
}

describe_city("Lahore");
describe_city("Karachi");
describe_city('Tokyo', 'Japan');

    Output
          Karachi is in Pakistan.
          Lahore is in Pakistan.
          Tokyo is in Japan.
