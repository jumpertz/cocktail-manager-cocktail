// pipeline {
//     agent any

//     stages {
//         stage('Checkout') {
//             steps {
//                 checkout scm
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm ci'
//             }
//         }

//         // stage('Test') {
//         //     steps {
//         //         sh 'npm test'
//         //     }
//         // }

//         stage('Build') {
//             steps {
//                 sh 'npm run build'
//             }
//         }
//     }

//     post {
//         always {
//             echo 'This will always run'
//         }
//         failure {
//             echo 'This will run only if failed'
//         }
//     }
// }

// 1C9B7D967484D2B4DC4B6CB5A2B6A

node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'CocktailManager-auth';
    withSonarQubeEnv() {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}