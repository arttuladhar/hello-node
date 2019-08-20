# ReadMe

## Getting Started

### Creating New Project in Openshift

```bash
oc new-project nodejs-openshift \
    --display-name="nodejs" --description="Sample Node.js app"
```

### Using New Project

```bash
oc project nodejs-openshift
```

### Creating New App from Source to Image

```bash
oc new-app git@github.com:arttuladhar/hello-node.git -l name=hello-nodejs
```
