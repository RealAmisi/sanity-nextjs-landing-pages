export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62fd2dcef0821a47c84e47ab',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nxwnbmn5',
                  apiId: '0f210171-e1a2-4209-a26c-c8a39855a2c7'
                },
                {
                  buildHookId: '62fd2dcef4d4d5410793975a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5eu3vtap',
                  apiId: 'ae81a6d8-57e5-4084-915a-940c191d7e31'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RealAmisi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5eu3vtap.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
