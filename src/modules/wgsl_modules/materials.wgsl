struct Material {
    albedo: vec3<f32>,
    roughness: f32,
    metallic: f32,
    F0: vec3<f32>
};

struct PointLight {
    position: vec3<f32>,
    color: vec3<f32>,
    power: f32
};