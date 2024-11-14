from django.db import models

class Product(models.Model):
    name = models.CharField(max_length = 200)
    description = models.TextField(blank = True, null = True)
    qty_stock = models.PositiveIntegerField()
    price = models.DecimalField(max_digits = 10, decimal_places = 2)
    added_date = models.DateTimeField(auto_now_add = True)
    
    def __str__(self):
        return self.nome 