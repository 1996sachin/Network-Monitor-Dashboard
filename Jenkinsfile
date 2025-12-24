pipeline {
    agent any
    
    environment {
        // Define environment variables
        APP_NAME = 'my-application'
        VERSION = '1.0.0'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub
                    url: 'https://github.com/1996sachin/Network-Monitor-Dashboard.git'
                
                // Or simply use:
                // checkout scm
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building application...'
                // Add your build commands here
                // sh 'mvn clean package' // Maven example
                // sh 'npm install && npm run build' // Node.js example
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your test commands here
                // sh 'mvn test' // Maven example
                // sh 'npm test' // Node.js example
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Add your deployment commands here
                // sh './deploy.sh'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
            // Update GitHub commit status
            githubNotify context: 'Jenkins', 
                         description: 'Build succeeded', 
                         status: 'SUCCESS'
        }
        failure {
            echo 'Pipeline failed!'
            // Update GitHub commit status
            githubNotify context: 'Jenkins', 
                         description: 'Build failed', 
                         status: 'FAILURE'
        }
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}
