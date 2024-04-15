from django.db import models

# Create your models here.
class Trabajador(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    nacimiento  = models.DateField()
    telefono = models.CharField(max_length=8)
    email = models.EmailField()
    laboral = models.TextField(max_length=900)
    atendidas = models.BooleanField(default=False)

    class Meta:
        verbose_name="Trabajador"
        verbose_name_plural="Trabajadores"

    def __str__(self):
        return self.nombre
