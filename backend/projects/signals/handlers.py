from django.db.models.signals import post_save
from templated_mail.mail import BaseEmailMessage
from django.core.mail import BadHeaderError
from django.dispatch import receiver
from projects.models import Contact
# from celery import shared


@receiver(post_save, sender=Contact)
def send_email_to_notify_new_mail(sender, created, instance, **kwargs):
    if created:
        try:
            message = BaseEmailMessage(
                template_name='guest.html',
                context={
                    'name': instance.name
                }
            )
            message.send([instance.email])

            admin_message = BaseEmailMessage(
                template_name='me.html',
                context={
                    'name': instance.name,
                    'email': instance.email,
                    'message': instance.message,
                    'time': instance.message_time,

                }
            )
            admin_message.send(
                ['ajaybullec@gmail.com'])
        except BadHeaderError:
            return "Something went wrong"
