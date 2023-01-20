from django.db.models.signals import post_save
from templated_mail.mail import BaseEmailMessage
from django.dispatch import receiver
from projects.models import Contact


@receiver(post_save, sender=Contact)
def send_email_to_notify_new_mail(sender, created, instance, **kwargs):
    if created:
        try:
            message = BaseEmailMessage(
                template_name='emails/clients.html',
                context={
                    'name': instance.name
                }
            )
            message.send([instance.email])

            admin_message = BaseEmailMessage(
                template_name='emails/admins.html',
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
