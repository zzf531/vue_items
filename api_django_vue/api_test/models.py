from django.db import models

# Create your models here.


class Book(models.Model):
    book_name = models.CharField(max_length=128, verbose_name='书名')
    add_time = models.DateField(auto_now_add=True, verbose_name='添加图书日期')

    class Meta:
        db_table = 'tb_book'

    def __str__(self):
        return self.book_name
