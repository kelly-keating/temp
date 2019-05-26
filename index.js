const Octokit = require('@octokit/rest')

const clientWithAuth = new Octokit({
  auth: 'token XXXe0a1f75918970a6e3fafdef6abf17a1d70cac41cXXX'
})

let octokit = clientWithAuth

let usernames = [
  'ben-sherwood',
  'colleenteau',
  'Danbez13',
  'daniel-bridewell',
  'Danielrhodesy',
  'hamish-w-smith',
  'hanh008',
  'john-w-aupouri',
  'karla-jane-hogan',
  'KandaceW',
  'mikeywipo',
  'OliverPetri',
  'haluskua',
  'pano-skylakis',
  'daniel-vanammers',
  'quentin-papera',
  'reubenosborne',
  'tim-xa',
  'tess-meyer',
  'tom-doesburg',
  'tessajane',
  'serenade-akaata'
]

let org = 'kotare-2019'
let role = 'member' // 'admin' or 'member'

Promise.all(
  usernames
    .sort()
    .map(username => octokit.orgs.addOrUpdateMembership({ org, username, role }))
)
  .then(results => {
    results
      .forEach(result => {
        // eslint-disable-next-line no-console
        console.log({ status: result.status }, result.data)
      })
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error(err)
  })
