from django.db import models
from django.utils.translation import ugettext_lazy as _


class Skills(models.Model):
    title = models.CharField(_("Skill title"), max_length=255)
    indicator = models.IntegerField(_("Skill indicator"), max_length=5, help_text=_("from 0 to 100"))
    icon = models.ImageField(upload_to='skill_icon')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _("Skill")
        verbose_name_plural = _("Skills")
