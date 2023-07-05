pipeline {
    agent any

    environment {
        SONARSERVER = 'jenkins-token'
        SONARSCANNER = 'cocktail-manager-cocktail'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci --force'
            }
        }

        // stage('Test and coverage') {
        //     steps {
        //         sh 'npm run test:cov'
        //     }
        // }

        stage('SonarQube analysis') {
                      environment {
            scannerHome = tool "${SONARSCANNER}";
          }
            steps {
              withSonarQubeEnv("${SONARSERVER}") {
                sh '''${scannerHome}/bin/sonar-scanner \
                  -Dsonar.projectKey=CocktailManager-cocktails \
                  -Dsonar.sources=. \
                  -Dsonar.host.url=http://52.87.237.67:9000/
                  '''
                }
                            script {
                if (env.BRANCH_NAME == 'main') {
                    withSonarQubeEnv("${SONARSERVER}") {
                        def scannerHome = tool "${SONARSCANNER}";
                        withEnv(["JAVA_HOME=${ tool 'JDK8' }", "PATH+SONAR=${SONARSCANNER}/bin"]) {
                            sh "sonar-scanner -Dsonar.projectKey=CocktailManager-cocktails -Dsonar.sources=. -Dsonar.host.url=http://52.87.237.67:9000 -Dsonar.login=ubuntu -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info"
                        }
                    }
                }
            }
            }
        }
        
        stage('Archive Code Coverage') {
          steps {
            archiveArtifacts artifacts: 'coverage/**', onlyIfSuccessful: true
          }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        always {
            echo 'This will always run'
        }
        failure {
            echo 'This will run only if failed'
        }
    }
}
