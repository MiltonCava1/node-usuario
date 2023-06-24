CREATE TABLE IF NOT EXISTS personas.tb_usuarios(
    int_usuario_id SERIAL NOT NULL,
	str_usuario_codigo varchar(15),
	str_usuario_nombre varchar(100),
	str_usuario_cedula varchar(11),
	int_usuario_edad int,
	str_usuario_telefono varchar(10)
);

select * from personas.tb_usuarios

insert into personas.tb_usuarios(
  str_usuario_codigo,
  str_usuario_nombre,
  str_usuario_cedula,
  int_usuario_edad,
  str_usuario_telefono
)
values
('HNE6487', 'Milton Cava', '172514270-9', 25, '0968857043'),
('PWR7892', 'Juan Arcos', '06547895-5', 30, '0974578489');