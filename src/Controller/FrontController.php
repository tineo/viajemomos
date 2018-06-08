<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class FrontController extends Controller
{

    /**
     * @Route("/", name="front")
     */
    public function pickaplace()
    {
        return $this->render('front/pickaplace.html.twig', [
            'controller_name' => 'FrontController',
        ]);
    }
    /**
     * @Route("/place", name="front")
     */
    public function place()
    {
        return $this->render('front/place.html.twig', [
            'controller_name' => 'FrontController',
        ]);
    }
}
