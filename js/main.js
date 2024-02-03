//setting scene
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();

renderer.setSize(800, 800);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;


//setting geometry
const planeGeometry = new THREE.PlaneGeometry(0.4, 0.3);
const planeMaterial = new THREE.MeshBasicMaterial();
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);


//variables
speedx = 0.01;
speedy = 0.005;
plane.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256))
bouncesLeft = 7;


function animate() {
    requestAnimationFrame(animate);

    //movement animation
    plane.position.x += speedx;
    plane.position.y += speedy;

    if (plane.position.x > 0.81)
    {
        speedx = -0.01;
        plane.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256))
        plane.scale.x -= 0.1;
        plane.scale.y -= 0.1;
        bouncesLeft--;
        
    }
    else if (plane.position.x < -0.81)
    {
        speedx = 0.01;
        plane.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256))
        plane.scale.x -= 0.1;
        plane.scale.y -= 0.1;
        bouncesLeft--;
        
    }
    else if (bouncesLeft <= 0)
    {
        plane.visible = false;
        speedx = 0;
        speedy = 0;
        
    }
    
    if (plane.position.y > 0.81)
    {
        speedy = -0.005;
        plane.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256))
        plane.scale.x -= 0.1;
        plane.scale.y -= 0.1;
        bouncesLeft--;

    }
    else if (plane.position.y < -0.81)
    {
        speedy = 0.005;
        plane.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256))
        plane.scale.x -= 0.1;
        plane.scale.y -= 0.1;
        bouncesLeft--;

    }
    else if (bouncesLeft <= 0)
    {
        plane.visible = false;
        speedx = 0;
        speedy = 0;

    }
   


    renderer.render(scene, camera);


};

animate();