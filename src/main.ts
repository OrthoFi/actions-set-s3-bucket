import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const environment = core.getInput('environment-name')
    let s3Bucket
    switch (environment) {
      case 'production':
      case 'demo':
      case 'risk':
      case 'lithium':
      case 'hydrogen':
      case 'helium':
      case 'thunder':
        s3Bucket = 'orthofi-production-lambdas'
        break
      default:
        s3Bucket = 'orthofi-ockers-lambdas'
        break
    }

    core.setOutput('name', s3Bucket)
    core.info(`Setting s3 bucket to ${s3Bucket}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
