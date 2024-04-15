from django.db import models

# Create your models here.
class Comprobante(models.Model):

    nombre = models.CharField(max_length=50)
    targeta = models.CharField(max_length=16)
    telefono = models.CharField(max_length=8)
    producto = models.CharField(max_length=100)
    direccion = models.CharField(max_length=500)
    total = models.CharField(max_length=100)
    created=models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name="Comprobante"
        verbose_name_plural="Comprobantes"

    def __str__(self):
        return self.nombre