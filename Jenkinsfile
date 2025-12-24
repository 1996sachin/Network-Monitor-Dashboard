kpipeline {
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
                git url: 'https://github.com/1996sachin/Network-Monitor-Dashboard.git', branch: 'main'
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
        
        stage('Code Quality') {
            when {
                // Run only for pull requests
                changeRequest()
            }
            steps {
                echo 'Running code quality checks...'
                // Add code quality tools here
                // sh 'sonar-scanner' // SonarQube example
            }
        }
        
        stage('Deploy') {
            when {
                // Deploy only from main/master branch
                branch 'main'
            }
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
        }
        failure {
            echo 'Pipeline failed!'
        }
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}
